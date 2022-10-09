import PropTypes from 'prop-types';

const Card = ({children, isFeatured, className,
                zzz = 'просто текст - zzz'}) => {
  return (
    <div
      className={
        `card${isFeatured ? ' card--featured' : ''}${className ? ' ' +
            className : ''}`
      }
    >
      {children}

    <p>{zzz}</p>


    </div>
  )


}

export {Card};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  isFeatured: PropTypes.bool,
  className: PropTypes.string,
  zzz: PropTypes.string,
}