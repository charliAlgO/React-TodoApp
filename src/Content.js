import ItemList from './ItemList'

const Content = ({items,handleCheck, handleDelete}) => { //destructuring props
   return (
      <>
        {items.length ? (   
          <ItemList
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ):(
          <p style={{ marginTop: '2rem', color: 'red'}}> Your list is empty!</p>
        )}
      </>
  )
}

export default Content