import React, { Suspense } from 'react'

const Loading = () => (
  <div>
    Loading....
  </div>
)


/**
 * Wrapper for suspended components
 *
 * @param RouteComponent React.Component
 */
const renderSuspense = (
  RouteComponent,
) => (routerProps) => {
  let props = {
    ...routerProps,
  }

  return (
    <Suspense fallback={<Loading/>}>
      <RouteComponent {...props} />
    </Suspense>
  )
}

export default renderSuspense
