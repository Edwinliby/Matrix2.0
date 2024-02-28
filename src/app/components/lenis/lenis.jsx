"use client"
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function Scroll() {
    useEffect(() => {
        const lenis = new Lenis()

        lenis.on('scroll', (e) => {
            // console.log(e)
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])
}