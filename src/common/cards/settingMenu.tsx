import { FaAngleRight } from 'react-icons/fa';

const SettingMenu = (props:any) => {
  return (
    <div
      style={{
        borderRadius: 5,
        minHeight: 60,
        minWidth: '100%',
        overflowY: 'hidden',
        alignItems: 'center',
        display: 'flex',
        float: 'left',
        borderWidth: 0.5,
        borderColor: '#CECECE',
        borderStyle: 'solid',
        marginBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
      }}
      onClick={() => {
       props.onClick(props.data)
      }}
      className="folder-item"
    >
      <div
        style={{
          width: '90%',
          float: 'left',
        }}
      >
        <label
          style={{
            fontWeight: 'bold',
          }}
        >
          {props.data.title}
        </label>
        <p
          style={{
            color: "#CECECE",
          }}
        >
          {props.data.description}
        </p>
      </div>
      <span
        style={{
          width: '10%',
          float: 'left',
          textAlign: 'right',
        }}
      >
        <FaAngleRight />
      </span>
    </div>
  )
}

export default SettingMenu
