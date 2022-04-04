import React from 'react';

const conditions = (props) => {
    return (
        <div>

            {props.error && <p className="text-danger mt-4">Nous ne trouvons pas votre recherche.</p>}

            {props.loading && <div className="spinner-border mt-4" />}


            {props.responseObj.cod === 200 ?
                <div className="mt-4">
                    <p>Il fait {Math.round(props.responseObj.main.temp)} degrés à {props.responseObj.name}, {props.responseObj.sys.country}.</p>
                </div>
            : null
            }
        </div>
    )
}

export default conditions;