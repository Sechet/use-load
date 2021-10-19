import { useMemo } from 'react'
import Loader from 'react-loader-spinner'
import { ProductList } from 'components'
import { fetchMoreItems } from 'api'
import { useLoadMore } from 'hooks/useLoadMore'

export const MoreProducts = () => {
  const { loading, items, loadMore, hasMore } = useLoadMore(fetchMoreItems)

  const Controls = () =>
    useMemo(
      () => (
        <div className='control-box'>
          <button onClick={loadMore} className='btn more'>
            👀
          </button>
        </div>
      ),
      //eslint-disable-next-line
      []
    )

  return (
    <>
      <ProductList products={items} />
      {loading ? (
        <Loader type='Oval' color='lightblue' width={50} className='loader' />
      ) : (
        hasMore && <Controls />
      )}
    </>
  )
}
