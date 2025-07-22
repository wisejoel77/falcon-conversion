body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #121212;
  color: #f1f1f1;
}

.container {
  display: flex;
  height: 100vh;
}

.left, .right {
  flex: 1;
  padding: 40px;
  box-sizing: border-box;
}

.left {
  border-right: 1px solid #333;
}

input, button {
  display: block;
  margin-top: 10px;
  padding: 10px;
  font-size: 1rem;
  background: #1e1e1e;
  color: white;
  border: 1px solid #444;
  border-radius: 4px;
  width: 100%;
}

button:hover {
  background-color: #272727;
  cursor: pointer;
}

#result {
  margin-top: 20px;
  font-size: 1.2rem;
  color: #00ffcc;
}

.right p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

#upiImage {
  max-width: 100%;
  height: auto;
  border: 2px solid #444;
  border-radius: 8px;
}
