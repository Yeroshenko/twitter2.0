import React, { ReactElement, ReactNode } from 'react'

import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

type ModalBlockProps = {
  title: string
  children: ReactNode
  visible?: boolean
  onClose: () => void
}

export const ModalBlock = ({
  title,
  onClose,
  visible = false,
  children
}: ModalBlockProps): ReactElement | null => {
  if (!visible) {
    return null
  }

  return (
    <Dialog open={visible} onClose={onClose}>
      <DialogTitle id='form-dialog-title'>
        <IconButton onClick={onClose} color='secondary'>
          <CloseIcon style={{ fontSize: 26 }} color='secondary' />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}
