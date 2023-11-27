export const isExternalLink = (url: string) =>
  /^(http|https|ftp|mailto|tel):/.test(url)

export const EthAddress = /^0x[a-fA-F0-9]{40}$/
