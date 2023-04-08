export const capitalizeFirstLetter = (string) => {
  if (typeof string === 'string') {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return string?.reduce((sum, cur) => (sum += cur + ' '), '');
};

export const getFormLabel = ({ label, required }) => {
  return (
    label && (
      <span>
        {label}
        {required && <span style={{ color: 'var(--error-primary-color)' }}>*</span>}
      </span>
    )
  );
};

export function stringToSlug(str) {
  // remove accents
  var from = 'àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ',
    to = 'aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy';
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(RegExp(from[i], 'gi'), to[i]);
  }

  str = str.toLowerCase().trim();

  return str;
}
