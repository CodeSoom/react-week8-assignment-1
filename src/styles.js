const styles = {
  menuItem(active) {
    return {
      marginRight: '1em',
      '& button': {
        padding: '.4em 1em',
        border: '1px solid #CCC',
        background: active ? '#EEE' : 'transparent',
        color: '#333',
        textDecoration: 'none',
        '&:hover': {
          color: '#000',
          fontWeight: 'bold',
          cursor: 'pointer',
        },
      },
    };
  },
  menuList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: '.4em 0',
  },
}

export default styles;