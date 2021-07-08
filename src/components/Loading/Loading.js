import React from 'react'
import { useSelector } from 'react-redux'
import './Loading.css'

export default function Loading() {
    const { isLoading } = useSelector(state => state.LoadingReducer)
    if (isLoading) {
        return (
            <div className="bgLoading">
                <div class="loader">
                    <div class="inner one"></div>
                    <div class="inner two"></div>
                    <div class="inner three"></div>
                </div>
            </div>
        )
    } else {
        return ''
    }
}
