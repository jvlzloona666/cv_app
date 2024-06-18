import './Form.css'

function Form() {
  const styles = {
    form: {
      display: 'flex',
    }
  }
  return (
    <>
        <div style={styles.form}>
         <form>
            <h3>Personal Information</h3>
            <label>Name:</label>
            <input type="text"  />
            <label>Email:</label>
            <input type="email" />
            <label>Phone Number:</label>
            <input type="text"  />

            <h3>Academic Background</h3>
            <label>School Name: </label>
            <input type="text"  />
            <label>Title of Study: </label>
            <input type="text"  />
            <label>Date of Study: </label>
            <input type="text"  />

            <h3>Practical Experience</h3>
            <label>Company Name: </label>
            <input type="text"  />
            <label>Position Title: </label>
            <input type="text"  />
            <label>Main Responsibility of your Jobs: </label>
            <input type="text"  />


         </form>
        </div>
    </>
  )
    
  
}

export default Form