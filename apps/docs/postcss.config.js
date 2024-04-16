module.exports = {
    plugins: [
        require('postcss-preset-env')({
            stage: 0,
            importFrom: {
                customMedia: {
                    '--small-viewport': '(max-width: 767px)',
                    '--small-min-viewport': '(max-width: 413px)',
                    '--small-max-viewport': '(min-width: 414px) and (max-width: 767px)',
                    '--medium-viewport': '(min-width: 768px) and (max-width: 1219px)',
                    '--large-viewport': '(min-width: 1220px)'
                }
            }
        })
    ]
  };

