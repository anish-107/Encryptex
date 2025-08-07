import { useState } from 'react';
import encryptionLogo from '/encryption.svg';
import decryptionLogo from './assets/decryption.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [text, setText] = useState('')
  const [result, setResult] = useState('')

  const encryptText = async () => {
    try {
      const response = await axios.post('http://localhost:5000/encrypt', { text })
      setResult(response.data.result)
    } catch (error) {
      console.error('Encryption failed:', error)
    }
  }

  const decryptText = async () => {
    try {
      const response = await axios.post('http://localhost:5000/decrypt', { text })
      setResult(response.data.result)
    } catch (error) {
      console.error('Decryption failed:', error)
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-gray-50 dark:bg-[#1a1a1a] text-gray-900 dark:text-white">
      {/* Logo Section */}
      <div className="flex justify-center items-center gap-12 mb-8">
        <div className="text-center">
          <img src={encryptionLogo} className="w-20 h-20 mx-auto" alt="Encryption logo" />
          <p className="mt-2 font-semibold">Encrypt</p>
        </div>
        <div className="text-center">
          <img src={decryptionLogo} className="w-20 h-20 mx-auto" alt="Decryption logo" />
          <p className="mt-2 font-semibold">Decrypt</p>
        </div>
      </div>

      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text underline decoration-wavy underline-offset-4">
          Encryptex
        </h1>
        <span className="mt-2 inline-block text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">
          🚧 Coming Soon
        </span>
      </div>

      {/* Input & Buttons */}
      <div className="w-full max-w-xl flex flex-col items-center gap-4">
        <input
          type="text"
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
        />

        <div className="flex gap-4">
          <button
            onClick={encryptText}
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
          >
            Encrypt
          </button>
          <button
            onClick={decryptText}
            className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
          >
            Decrypt
          </button>
        </div>

        {/* Result Box */}
        {result && (
          <div className="mt-6 w-full">
            <h2 className="text-lg font-semibold mb-2 text-center">Result</h2>
            <div className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow text-center break-words">
              {result}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
