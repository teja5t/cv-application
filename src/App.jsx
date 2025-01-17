import { useState, useRef } from 'react'
import Generator from './generator/Generator'
import Document from './document/Document'
import './App.css'
import html2pdf from 'html2pdf.js';

function App() {
  const [resumeData, setResumeData] = useState(
    {
      header: { fullName: 'Tejas Tirthapura', phoneNumber: '515-203-1258', email: 'tirthapuratejas@gmail.com', location: 'Saratoga CA, 95070' },
      education: [{ 
        school: 'Columbia University', 
        schoolLocation: 'New York, NY', 
        degree: 'BA in Computer Science', 
        details: 'Columbia-Juilliard Exchange', 
        graduation: 'May 2028', 
        key: crypto.randomUUID() }],
      experience: [{ 
        position: 'Summer Intern', 
        company: 'Akanomics Inc, a financial data startup',  
        companyLocation: 'New York, NY', 
        description: `Helped develop first version of an analytics product for reports issued by the Bureau of Economic AnalysisDesigned and implemented web scraping tools to collect and process economic data`, 
        dates: 'May-July 2022', 
        key: crypto.randomUUID() }],
      additional: [{
          sectionTitle: 'Projects',
          items: [
            {
              title: 'Blockchain from Scratch',
              description: 'Built a blockchain from scratch as part of a Udemy course, implementing concepts of distributed ledger technology, consensus algorithms, and cryptographic hashing. Developed functionalities for adding transactions, validating blocks, and maintaining the integrity of the chain',
              dates: 'March-April 2023', 
              key: crypto.randomUUID()
            }, {
              title: 'Cafe List',
              description: 'Built a full stack web application which displays nearby cafes and shows which cafes different users liked. Used google api and learnt to set up a database and server.',
              dates: 'Jan 2025', 
              key: crypto.randomUUID()
            }
          ], 
          key: crypto.randomUUID()
        },
        {
          sectionTitle: 'Activities',
          items: [
            {
              title: 'SUITS - Columbia Space Initiative',
              description: 'Design user interfaces for NASA’s space suit challenge focusing on astronaut safety and operational efficiency. Collaborate with peers to manage project workflows, ensure deadlines are met, and support overall development',
              dates: 'Sep 2024-Present', 
              key: crypto.randomUUID()
            }
          ], 
          key: crypto.randomUUID()
        }
      ]
    }
  )

  const documentRef = useRef();

  const downloadPDF = () => {
    const element = documentRef.current;
    const options = {
      margin: 0,
      filename: 'resume.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    // Generate the PDF
    html2pdf().set(options).from(element).save();
  };
  const addEducationSection = () => {
    const newResumeData = {
      ...resumeData, education: 
        [...resumeData['education'], { 
          school: '', 
          schoolLocation: '', 
          degree: '', 
          details: '', 
          graduation: '', 
          key: crypto.randomUUID() }
      ]
    }
    setResumeData(newResumeData);
  }

  const addExperienceSection = () => {
    console.log('hi');
    const newResumeData = {
      ...resumeData, experience: 
        [...resumeData['experience'], { 
          position: '', 
          company: '',  
          companyLocation: '', 
          description: ``, 
          dates: '', 
          key: crypto.randomUUID() }
      ]
    }
    setResumeData(newResumeData)
  }

  const removeEducationSection = (index) => {
    const newResumeData = {
      ...resumeData, education: 
        resumeData['education'].filter((element, i) => index !== i)
    }
    setResumeData(newResumeData);
  }

  const removeExperienceSection = (index) => {
    const newResumeData = {
      ...resumeData, experience: 
        resumeData['experience'].filter((element, i) => index !== i)
    }
    setResumeData(newResumeData);
  }

  const addSection = () => {
    const newResumeData = {
      ...resumeData, additional: 
        [...resumeData.additional, {
          title: '',
          items: [
            {
              title: '',
              description: '',
              dates: '', 
              key: crypto.randomUUID()
            }
          ], 
          key: crypto.randomUUID()
        }
      ]
    }
    setResumeData(newResumeData);
  }

  const removeSection = (index) => {
    const newResumeData = {
      ...resumeData, additional: 
        resumeData['additional'].filter((element, i) => index !== i)
    }
    setResumeData(newResumeData);
  }

  const addItem = (index) => {
    const newResumeData = {...resumeData}
    newResumeData.additional[index].items.push({
      title: '',
      description: '',
      dates: '', 
      key: crypto.randomUUID()
    })
    setResumeData(newResumeData);
  }

  const removeItem = (i, j) => {
    const newResumeData = {...resumeData}
    newResumeData.additional[i].items = [...newResumeData.additional[i].items]
    newResumeData.additional[i].items = newResumeData.additional[i].items.filter((element, index) => j !== index)
    setResumeData(newResumeData)
  }

  const handleInputChange = (section, key, value, i, j) => {
    const newResumeData = {...resumeData};
    if (Array.isArray(newResumeData[section])) {
      if (section === 'additional' && key !== 'sectionTitle') {
        newResumeData[section][i]['items'][j][key] = value;
        console.log(value);
      }
      else {
        newResumeData[section][i][key] = value;
      }
    } else {
      newResumeData[section][key] = value;
    }
    setResumeData(newResumeData)
  }

  return (
    <>
      <h1 className='title'>Resume Generator</h1>
      <div className='content'>
        <div className="generator">
          <Generator
            data={resumeData}
            updateDocument={handleInputChange}
            addEducationSection={addEducationSection}
            removeEducationSection={removeEducationSection}
            addExperienceSection={addExperienceSection}
            removeExperienceSection={removeExperienceSection}
            addSection={addSection}
            removeSection={removeSection}
            addItem={addItem}
            removeItem={removeItem}
          />
        </div>
        <div className="document" ref={documentRef}>
          <Document 
            data={resumeData}
          />
        </div>
        <button onClick={downloadPDF}>Download PDF</button>
      </div>
    </>
  )
}

export default App
