
import { Colors } from "./color";

export const stylesSmallComponent = {
  buttonStyle: {
    backgroundColor: '#5CD6FF',
    color: 'black',
    borderRadius: "25px",
    border: '1px solid #00BFFF',
    padding: '10px 20px',
    '&:hover': {
      backgroundColor: '#00BFFF',
    },
  },
  textTitle: {
    fontfamily: 'Manrope',
    fontWeight: 500,
    color: 'white',
    fontSize: '24px',
  },
  textValue: {
    fontSize: '14px',
    fontWeight: 400,
    color: '#667085',
  },
  whiteText: {
    fontSize: '14px',
    fontWeight: 200,
    color: 'white',
  },
  modalBox: {
    backgroundColor: Colors.white,
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    width: 'max-content',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 10,
    cursor: 'pointer',
    color: 'black',
    fontSize: 30,
  },
  pageTitle: {
    color: '#101828',
    fontWeight: 600,
    
  }
}