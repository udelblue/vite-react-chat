import { useState, useEffect } from 'react'

function Chat() {

  const [history, setHistory] = useState<string[]>([]);

  const [form, setForm] = useState({
    message: ''

  });



  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputValue = formData.get('message');

    if (inputValue) {

      setForm({ message: inputValue.toString() });
      setHistory(prevHistory => [
        `User: ${inputValue.toString()}`,
        ...prevHistory,
      ]);
      var botResponse = "I am a bot"; // This is where you would put your bot response
      setHistory(prevHistory => [
        `Bot: ${botResponse}`,
        ...prevHistory,
      ]);

    }

  };

  return (
    <div className='flex flex-col items-center p-7 rounded-2xl border-2 border-gray-300"'>
      <h1 className='text-3xl font-bold'>Chat</h1>
      <div className='grid h-full w-full justify-items-center overflow-hidden place-items-center p-6 py-8 sm:p-8 lg:p-12'>

        {history.map((item, index) => (
          <div>
            <div className="text-sm/6 font-medium text-gray-500" key={index}>{item}   <div className="flex-grow border-t border-gray-200"></div></div>

          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>

        <label className='font-medium text-gray-900' htmlFor="message">Message: </label>
        <input
          className='h-full py-2 px-4 border rounded-l-md'
          type="text"
          id="message"
          name="message"
          defaultValue={form.message}

        />

        <button className='ml-5  h-full py-2 px-4 bg-blue-500 text-white rounded-r-md' type="submit">Submit</button>
      </form>
    </div>
  );
}


export default Chat