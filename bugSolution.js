```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const logInterval = setInterval(() => {
      console.log('Count updated:', count);
    }, 1000);

    // Cleanup function
    return () => clearInterval(logInterval);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```