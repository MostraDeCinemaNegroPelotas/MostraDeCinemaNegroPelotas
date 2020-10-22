import PropTypes from 'prop-types'

export default function Text ({ text, tag: Tag, styleModifier }) {
  return (
    <Tag className={`${styleModifier || ''}`}>
      {text}
    </Tag>
  )
}

Text.propTypes = {
  text: PropTypes.object,
  tag: PropTypes.any,
  styleModifier: PropTypes.any
}
