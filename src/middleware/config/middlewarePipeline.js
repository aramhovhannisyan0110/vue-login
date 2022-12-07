export const middlewarePipeline = (context, middleware, index) => {
  const nextMiddleware = middleware[index]
  if (!nextMiddleware) {
    return context.next
  }
  return () => {
    const nextPipeline = middlewarePipeline(
      context, middleware, index + 1
    )
    nextMiddleware({ ...context, nextMiddleware: nextPipeline })
  }
}

export const getMiddleware = (to) => {
  if (!to?.meta?.middleware) {
    return to.matched.find(e => e?.meta?.middleware)?.meta?.middleware
  }
  return to.meta.middleware
}
