import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function ComponentSkeleton() {
    return (
        <SkeletonTheme baseColor="#969696" highlightColor="#c2c2c2" inline={true}>
            <div className="container">
                <Skeleton className='mx-3 mb-4' count={12} height={350} width={290} />
            </div>
        </SkeletonTheme>
    )
}

export default ComponentSkeleton;