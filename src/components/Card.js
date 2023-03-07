import React from 'react'

const Card = ({ title, location, googleMapsUrl, startDate, endDate, description, imageUrl }) => {
  return (
    <div className='Card'>
        <section>
            <img className='card--img' src={imageUrl} alt={title}/>
        </section>
        <section>
            <div className='location'>
                <p className='location--text'>{location.toUpperCase()}</p>
                <p className='location--maps-link'><a href={googleMapsUrl} target='_blank' rel='noreferrer'>View on Google Maps</a></p>
            </div>
            <h1 className='card--title'>{title}</h1>
            <h4 className='card--dates'>{startDate} - {endDate}</h4>
            <p className='card--description'>{description}</p>
        </section>
    </div>
  )
}

export default Card