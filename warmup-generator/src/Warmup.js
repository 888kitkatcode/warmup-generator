function Warmup( {warmup} ) {

  return (
    <div className="Warmup">
      <a href={warmup.instructions} target="_blank" key={warmup.heading}>{warmup.heading}</a>
      {/* <ul key={warmup.instructions}>{warmup.instructions.map((step) => 
        <p key={step}>{step}</p>)}</ul> */}
      {/* <ul key={warmup.examples}>{warmup.examples.map((example) =>
         <ul key={example}>{example}</ul>)}</ul> */}
      <ul key={warmup.time}>{warmup.time}</ul>
      <ul key={warmup.language}>{warmup.language}</ul>
    </div>
  )
}

export default Warmup