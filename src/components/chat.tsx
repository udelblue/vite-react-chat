import {  useState } from 'react'

function Chat() {

    const [history, setHistory] = useState<string[]>([]);

    const [formData, setFormData] = useState({
        message: ''
    
    });
  
    const handleChange = (e:any) => {
      const { name, value } = e.target;
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e:any) => {
      e.preventDefault();

        
        setHistory(prevHistory => [
            `User: ${formData.message}`,
            ...prevHistory,
        ]);
        var botResponse = "I am a bot"; // This is where you would put your bot response
        setHistory(prevHistory => [
            `Bot: ${botResponse}`,
            ...prevHistory,
        ]);
        setFormData({
            message: '',
        });
      console.log('Form Data:', formData);

    };
  
    return (
        <div className='flex flex-col items-center p-7 rounded-2xl"'>
        <h1 className='text-3xl font-bold'>Chat</h1>
        <div className='grid h-full w-full justify-items-center overflow-hidden place-items-center p-6 py-8 sm:p-8 lg:p-12'>
        {history.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        
          <label htmlFor="message">Message: </label>
          <input
            type="text"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        
        <button className='ml-5 gap-x-2 rounded-lg'  type="submit">Submit</button>
      </form>
      </div>
    );
  }
  

export default Chat