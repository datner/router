import { serverOnly } from "@tanstack/start";

export const explode = serverOnly(() => "server")

export const explodeAnotherWay = () => {
  const s = serverOnly(() => "server")
  return s() ?? "client"
} 
