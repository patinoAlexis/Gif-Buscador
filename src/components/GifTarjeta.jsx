import PropTypes from 'prop-types'

export const GifTarjeta = ({title,url}) => {
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

GifTarjeta.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}