import React, { Children } from 'react'

import Link from 'next/link'
import { withRouter } from 'next/router'

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children)

  let className = child.props.className || null

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className !== null ? className : ''} ${
      props.activeClassName
    }`.trim()
  }

  delete props.activeClassName

  return (
    <Link href={''} {...props}>
      {React.cloneElement(child, { className })}
    </Link>
  )
}

export default withRouter(ActiveLink)
