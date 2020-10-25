import React, { ReactElement, useState } from 'react'

import { Button, FormGroup, FormControl, TextField, Typography } from '@material-ui/core'
import { ModalBlock } from 'components'
import { useSignInStyles } from './styles'

import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'

export const SignIn = (): ReactElement => {
  const cls = useSignInStyles()

  const [visibleModal, setVisibleModal] = useState<'signIn' | 'signUp'>()

  const handleClickOpenSignIn = (): void => setVisibleModal('signIn')
  const handleClickOpenSignUp = (): void => setVisibleModal('signUp')
  const handleCloseModal = (): void => setVisibleModal(undefined)

  return (
    <div className={cls.wrapper}>
      <div className={cls.blueSide}>
        <TwitterIcon className={cls.blueSideBackIcon} />
        <ul className={cls.blueSideList}>
          <li className={cls.blueSideListItem}>
            <SearchIcon />
            <Typography variant='h6'>Читайте о том, что вам интересно.</Typography>
          </li>
          <li className={cls.blueSideListItem}>
            <PeopleOutlineIcon />
            <Typography variant='h6'>Узнайте, о чем говорят в мире.</Typography>
          </li>
          <li className={cls.blueSideListItem}>
            <ChatBubbleOutlineIcon />
            <Typography variant='h6'>Присоединяйтесь к общению.</Typography>
          </li>
        </ul>
      </div>
      <div className={cls.loginSide}>
        <div className={cls.loginSideInner}>
          <TwitterIcon className={cls.loginSideLogo} />
          <Typography variant='h2' className={cls.loginSideTitle}>
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography className={cls.loginSideSubtitle}>
            Присоединяйтесь к Твиттеру прямо сейчас!
          </Typography>
          <div className={cls.loginSideButtons}>
            <Button variant='contained' color='primary' fullWidth onClick={handleClickOpenSignUp}>
              Зарегистрироваться
            </Button>
            <Button variant='outlined' color='primary' fullWidth onClick={handleClickOpenSignIn}>
              Войти
            </Button>
            <ModalBlock
              title='Войти в аккаунт'
              visible={visibleModal === 'signIn'}
              onClose={handleCloseModal}
            >
              <FormControl component='fieldset' fullWidth className={cls.loginFormControl}>
                <FormGroup row>
                  <TextField
                    type='email'
                    name='email'
                    label='E-Mail'
                    variant='filled'
                    autoFocus
                    fullWidth
                    className={cls.loginSideField}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    type='password'
                    name='password'
                    label='Пароль'
                    variant='filled'
                    fullWidth
                    className={cls.loginSideField}
                    InputLabelProps={{ shrink: true }}
                  />
                  <Button variant='contained' color='primary' fullWidth onClick={handleCloseModal}>
                    Войти
                  </Button>
                </FormGroup>
              </FormControl>
            </ModalBlock>
            <ModalBlock
              title='Создайте учетную запись'
              visible={visibleModal === 'signUp'}
              onClose={handleCloseModal}
            >
              <FormControl component='fieldset' fullWidth className={cls.loginFormControl}>
                <FormGroup row>
                  <TextField
                    type='name'
                    name='name'
                    label='Имя'
                    variant='filled'
                    autoFocus
                    fullWidth
                    className={cls.registerField}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    type='email'
                    name='email'
                    label='E-Mail'
                    variant='filled'
                    fullWidth
                    className={cls.registerField}
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField
                    type='password'
                    name='password'
                    label='Пароль'
                    variant='filled'
                    fullWidth
                    className={cls.registerField}
                    InputLabelProps={{ shrink: true }}
                  />
                  <Button variant='contained' color='primary' fullWidth>
                    Далее
                  </Button>
                </FormGroup>
              </FormControl>
            </ModalBlock>
          </div>
        </div>
      </div>
    </div>
  )
}
