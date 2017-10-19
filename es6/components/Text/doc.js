import { describe, PropTypes } from 'react-desc';

export default (function (Text) {
  var DocumentedText = describe(Text).description('Arbitrary text.').usage('import { Text } from \'grommet\';\n    <Text/>');

  DocumentedText.propTypes = {
    color: PropTypes.string.description('A color identifier to use for the text color. For example:\n      \'status-critical\'.'),
    margin: PropTypes.oneOfType([PropTypes.oneOf(['none', 'small', 'medium', 'large']), PropTypes.shape({
      bottom: PropTypes.oneOf(['small', 'medium', 'large']),
      top: PropTypes.oneOf(['small', 'medium', 'large'])
    })]).description('The amount of margin above and/or below the heading. An object can be\n      specified to distinguish top margin and bottom margin.'),
    size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']).description('The font size is primarily driven by the chosen tag. But, it can\n      be adjusted via this size property. The tag should be set for semantic\n      correctness and accessibility. This size property allows for stylistic\n      adjustments.'),
    tag: PropTypes.string.description('The DOM tag to use for the element.').defaultValue('span'),
    textAlign: PropTypes.oneOf(['start', 'center', 'end']).description('How to align the text inside the component.'),
    truncate: PropTypes.bool.description('Restrict the text to a single line and truncate with ellipsis if it\n      is too long to all fit.')
  };

  return DocumentedText;
});