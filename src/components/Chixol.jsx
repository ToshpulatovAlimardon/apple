const Chixol = (props) => {
  return (
    <div>
      <div>
        <div className="chixol-item">
          <img src={props.image} />
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  )
}

export default Chixol