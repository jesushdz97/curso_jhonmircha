import React from 'react'

const SongArtist = ({ bio }) => {
  let { artists } = bio
  let info = artists[0]
  let {
    strArtistThumb,
    strArtist,
    intBornYear,
    intDiedYear,
    strCountry,
    strGenre,
    strWebsite,
    strBiographyEN
  } = info

  return (
    <div className='container'>
      <h5 className='mb-4 text-uppercase' style={{ whiteSpace: 'pre-wrap' }}>
        Informacion del Artista
      </h5>
      <img
        src={strArtistThumb}
        alt={strArtist}
        className='img-thumbnail'
        style={{ maxHeight: '400px' }}
      />
      <div className='container mt-3 border'>
        <h5 className='text-uppercase'> {strArtist} </h5>
        <p className={intDiedYear ? 'text-danger' : 'text-success'}>
          {intBornYear} - {intDiedYear || 'Presente'}
        </p>
        <p>País: {strCountry} </p>
        <p>Genero: {strGenre} </p>
        <a href={`https://${strWebsite}`} target='_blank' rel='noreferrer'>
          Sitio Web Oficial
        </a>
        <p className='mt-5 fw-bold'>Biografía</p>
        <p>{strBiographyEN}</p>
      </div>
    </div>
  )
}

export default SongArtist
