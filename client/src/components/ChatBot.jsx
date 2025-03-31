import React,{useState} from "react";

function ChatBot(){
    const [messages,setMessages] = useState([
        {text:"Hello, how can I help you today?",sender:"bot"}
    ]);
    const [input,setInput] = useState("");
    
    const handleSend=()=>
    {
        if(!input.trim()) return ;
        const userMessage = { text: input, sender: "user" };
        const botMessage = { text: "Thank you for your message. I'll get back to you!", sender: "bot" };
        setMessages([...messages, userMessage, botMessage]);
        setInput('');
    };
    return(
        <div className="fixed bottom-6 right-6 w-80 bg-white shadow-lg rounded-lg">
      <div className="bg-green-600 text-white p-4 rounded-t-lg flex items-center">
        <span className="mr-2">🤖</span>
        <h3 className="text-lg font-semibold">HealthBot</h3>
      </div>

      <div className="h-64 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg text-white ${
              msg.sender === "user" ? "bg-blue-600 self-end ml-12" : "bg-gray-500 text-black mr-12"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="p-4 flex border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-lg focus:outline-none text-black"
        />
        <button onClick={handleSend} className="ml-2 bg-green-600 text-white px-4 py-2 rounded-lg">
          ➤
        </button>
      </div>
    </div>
  );
};
export default ChatBot;