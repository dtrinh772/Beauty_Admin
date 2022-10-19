import Cookies from 'js-cookie'

// App
const sidebarStatusKey = 'sidebar_status'
export const getSidebarStatus = () => Cookies.get(sidebarStatusKey)
export const setSidebarStatus = (sidebarStatus: string) => Cookies.set(sidebarStatusKey, sidebarStatus)

const languageKey = 'language'
export const getLanguage = () => Cookies.get(languageKey)
export const setLanguage = (language: string) => Cookies.set(languageKey, language)

const sizeKey = 'size'
export const getSize = () => Cookies.get(sizeKey)
export const setSize = (size: string) => Cookies.set(sizeKey, size)

// User
const tokenKey = 'access_token'
export const getToken = () => Cookies.get(tokenKey)
export const setToken = (token: string) => Cookies.set(tokenKey, token)
export const removeToken = () => Cookies.remove(tokenKey)

const roleKey = 'access_role'
export const getRole = () => Cookies.get(roleKey)
export const setRole = (role: string) => Cookies.set(roleKey, role)
export const removeRole = () => Cookies.remove(roleKey)

const nameKey = 'user_name'
export const getName = () => Cookies.get(nameKey)
export const setName = (name: string) => Cookies.set(nameKey, name)
export const removeName = () => Cookies.remove(nameKey)

const idKey = 'user_id'
export const getId = () => Cookies.get(idKey)
export const setId = (Id: string) => Cookies.set(idKey, Id)
export const removeId = () => Cookies.remove(idKey)

const permissionKey = 'user_permission'
export const getPermission = () => Cookies.get(permissionKey)
export const setPermission = (permission: string) => Cookies.set(permissionKey, permission)
export const removePermission = () => Cookies.remove(permissionKey)
