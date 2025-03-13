import React, { useState } from 'react';
    import './Home.css';

    function Home() {
      const [file, setFile] = useState(null);
      const [text, setText] = useState('');
      const [summary, setSummary] = useState('');
      const [keywords, setKeywords] = useState([]);
      const [searchTerm, setSearchTerm] = useState('');
      const [isLoading, setIsLoading] = useState(false);

      const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
      };

      const handleUpload = async () => {
        if (!file) {
          alert('Please select a file.');
          return;
        }

        setIsLoading(true);

        // Simulate image-to-text conversion (replace with actual API call if available)
        const reader = new FileReader();
        reader.onload = async (e) => {
          const imageBase64 = e.target.result;
          // Simulate API response
          setTimeout(() => {
            const simulatedText = `This is a simulated text from the image.  It contains important keywords like React, JavaScript, and components.  This is a longer text to test the summarization.  React is a JavaScript library for building user interfaces. Components are reusable building blocks.  This is another sentence to make the summary more interesting.`;
            setText(simulatedText);
            summarizeAndExtractKeywords(simulatedText);
            setIsLoading(false);
          }, 2000); // Simulate API call delay
        };
        reader.readAsDataURL(file);
      };

      const summarizeAndExtractKeywords = (inputText) => {
        // Simple summarization and keyword extraction (replace with a more sophisticated method)
        const sentences = inputText.split(/[.!?]/).filter(sentence => sentence.trim() !== '');
        const summary = sentences.slice(0, 2).join('. ') + '.'; // Take the first two sentences
        const words = inputText.toLowerCase().split(/\s+/);
        const keywordSet = new Set(words.filter(word => word.length > 3 && !['this', 'is', 'a', 'the', 'of', 'and', 'in', 'to', 'for', 'that', 'are', 'with'].includes(word)));
        const keywords = Array.from(keywordSet);
      };

      const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
      };

      const filteredKeywords = keywords.filter(keyword =>
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return (
        <section id="home" className="home-section">
          <h1>Welcome to the Lecture Notes Tool</h1>
          <p>Upload your notes and get instant summaries and keywords!</p>

          <div className="upload-section">
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={!file || isLoading}>
              {isLoading ? 'Uploading...' : 'Upload'}
            </button>
          </div>

          {isLoading && <div className="loading-indicator">Loading...</div>}

          {text && (
            <div className="text-section">
              <h2>Extracted Text:</h2>
              <p>{text}</p>
            </div>
          )}

          {summary && (
            <div className="summary-section">
              <h2>Summary:</h2>
              <p>{summary}</p>
            </div>
          )}

          {keywords.length > 0 && (
            <div className="keywords-section">
              <h2>Keywords:</h2>
              <input
                type="text"
                placeholder="Search keywords..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <ul>
                {filteredKeywords.map((keyword, index) => (
                  <li key={index}>{keyword}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      );
      
    }


    export default Home;
