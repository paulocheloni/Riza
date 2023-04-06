import {
  CommonActions,
  createNavigationContainerRef,
  ParamListBase
} from '@react-navigation/native'

type ValueOf<T> = T[keyof T]

export const navigationRef = createNavigationContainerRef<any>()

export const navigate = <T extends ParamListBase>(name: keyof T, params?: ValueOf<T>): void => {
  if (navigationRef.isReady()) {
    // @ts-expect-error
    navigationRef.navigate(name, params)
  }
}

export function goBack (): void {
  if (navigationRef.isReady()) {
    navigationRef.goBack()
  }
}
function navigateWithReset<T extends ParamListBase> (name: keyof T, params?: ValueOf<T>): void {
  if (navigationRef.isReady()) {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name: name as string, params }]
    })
    navigationRef.dispatch(resetAction)
  }
}

export default { navigationRef, navigate, goBack, navigateWithReset }
