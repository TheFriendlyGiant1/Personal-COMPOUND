function findWordInList(word, wordList) {
    /**
     * This function loops through a list of English common words to identify a specific word.
     * 
     * @param {string} word - The word to search for in the list
     * @param {Array} wordList - The list of English common words
     * @returns {boolean} - True if the word is found in the list, false otherwise
     */
    
    try {
        // Check if the word is a string
        if (typeof word !== 'string') {
            throw new TypeError('The word must be a string');
        }
        
        // Check if the wordList is an array
        if (!Array.isArray(wordList)) {
            throw new TypeError('The wordList must be an array');
        }
        
        // Loop through the wordList to find the word
        for (let i = 0; i < wordList.length; i++) {
            if (wordList[i] === word) {
                return true;
            }
        }
        
        // Word not found in the list
        return false;
    } catch (error) {
        // Log the error
        console.error('Error:', error.message);
        return false;
    }
}

// Example usage
const englishWords = ['apple', 'banana', 'car', 'dog', 'elephant'];
const wordToFind = 'banana';
const isWordFound = findWordInList(wordToFind, englishWords);
console.log(`Is the word "${wordToFind}" found in the list? ${isWordFound}`);
