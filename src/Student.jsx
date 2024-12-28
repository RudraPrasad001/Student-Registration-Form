import PropTypes from 'prop-types'
function Student(prop){
    return(
        <div>
            <p>Name:{prop.name}</p>
            <p>Age : {prop.age}</p>
            <p>isStudent :{prop.isStudent}</p>

        </div>
    )

}
Student.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.string
}
Student.defaultProps={
    name:"Guest",
    age:0,
    isStudent:"No"
}
export default Student