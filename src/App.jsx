import { useState } from 'react'
import Generator from './generator/Generator'
import Document from './document/Document'
import './App.css'

function App() {
  const [resumeData, setResumeData] = useState(
    {
      header: { fullName: 'Tejas Tirthapura', phoneNumber: '515-203-1258', email: 'tirthapuratejas@gmail.com', location: 'Saratoga CA, 95070' },
      education: [{ school: 'Columbia University', schoolLocation: 'New York, NY', degree: 'BA in Computer Science', details: 'Columbia-Juilliard Exchange', graduation: 'May 2028', key: crypto.randomUUID() }]
    }
    )

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

  const removeEducationSection = (index) => {
    const newResumeData = {
      ...resumeData, education: 
        resumeData['education'].filter((element, i) => index !== i)
    }
    setResumeData(newResumeData);
  }

  const handleInputChange = (section, key, value, index) => {
    const newResumeData = {...resumeData};
    if (Array.isArray(newResumeData[section])) {
      newResumeData[section][index][key] = value;
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
          />
        </div>
        <div className="document">
          <Document 
            data={resumeData}
          />
        </div>
      </div>
    </>
  )
}

export default App
