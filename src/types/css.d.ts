/* Allow side-effect CSS imports from @payloadcms packages and local CSS files */
declare module '@payloadcms/next/css' {
  const content: never
  export default content
}

declare module '*.css' {
  const content: Record<string, string>
  export default content
}
