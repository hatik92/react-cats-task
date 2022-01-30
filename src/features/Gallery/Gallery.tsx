import { FC, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getImages, getMoreImages } from './GallerySlice'
import styles from './gallery.module.sass'
import Loading from '../common/loading/loading'
type MyParams = {
  id: number
}
const Gallery: FC<any> = () => {
  
  const categoryParams = useParams<keyof MyParams>() as unknown as MyParams
  const catImages = useAppSelector(store => store.galery.iamges)
  const initialized = useAppSelector(store => store.galery.initialized)
  console.log(initialized);
  const [moreCount, setmoreCount] = useState(1);
  const dispatch = useAppDispatch()
  const categoryId = +categoryParams.id
  useEffect(() => {
    setmoreCount(1)
    dispatch(getImages(categoryId))
  }, [categoryParams]);
  useEffect(() => {
    if (moreCount !== 1) {
      dispatch(getMoreImages({ categoryId, page: moreCount }))
      console.log(moreCount);
    }
  }, [moreCount]);
  const clickMore = () => {
    
  }

  return (<>
    {initialized ? <div>
      <div className={styles.gallery}>
        {catImages.map((img, i) => 
        // <div key={i} className={styles.inner}>
          <img key={i} src={img.url} alt="" />
        // </div>
        )}
      </div>
      <div className={styles.moreButton}>
        <button onClick={() => setmoreCount(moreCount + 1)}>More</button>
      </div>
    </div> : <Loading />}
  </>)
}

export default Gallery