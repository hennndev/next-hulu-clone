import React from 'react'
import Head from 'next/head'
import Results from '../components/results/results'
import request from '../utils/request'

const Index = ({results}) => {
	return (
		<div>
			<Head>
				<title>Hulu 2.0</title>
				<link rel="icon" href="favicon.ico"/>
			</Head>

			<Results 
				results={results}/>
		</div>
	)
}


export async function getServerSideProps(context) {
	const genre = context.query.genre

	const res = await fetch(`https://api.themoviedb.org/3${request[genre]?.url || request.trending.url}`)
	const results = await res.json()
	return {
		props: {
			results
		}
	}
}

export default Index
