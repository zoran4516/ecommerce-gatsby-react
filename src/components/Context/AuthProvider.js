

  useEffect(() => {
    const token = localStorage.getItem('customerToken')
    setToken(token)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        token,
        updateToken,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
