const Alert = ({ message }) => {
    if (message === null) return ''


    return (
        <div className='alert'>
            {message}
        </div>
    )
}
export default Alert