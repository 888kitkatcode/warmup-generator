function Warmup( {warmup} ) {

  return (
    <div className="Warmup">
      <h2 key={warmup.heading}>{warmup.heading}</h2>
      <ul key={warmup.instructions}>{warmup.instructions.map((step) => 
        <p key={step}>{step}</p>)}</ul>
      <ul key={warmup.examples}>{warmup.examples.map((example) =>
         <ul key={example}>{example}</ul>)}</ul>
      <ul key={warmup.language}>{warmup.language}</ul>
    </div>
  )
}

export default Warmup