export async function Discover() {
    function truncateString(str, num) {
        if (str.length <= num) {
            return str
        }
        return str.slice(0, num) + '...'
    }

    async function getLine(req, ids) {
        const response = await expressapi.RequestHelper.request({
            url: `${process.env.API_BASE_URL}/items?ids=${ids.join(",")}`,
            headers: {
                "Authorization": `Bearer ${req.user.token}`
            }
        });
    
        return response.items.map(item => <>
            <div>
                <a href={item.movie == 1 ? `/movie?id=${item.id}` : `/serie?id=${item.id}`}><img loading="lazy" src={item.smallPoster} alt="poster" width="100" height="100" /></a>
                <p>{item.title}</p>
                <p>{item.movie == 1 ? "Film" : "Série"} ● {item.releaseDate}</p>
            </div>
        </>).join("\n");
    }

    async function getSlide(req, ids, percent) {
        const response = await expressapi.RequestHelper.request({
            url: `${process.env.API_BASE_URL}/items?ids=${ids.join(",")}`,
            headers: {
                "Authorization": `Bearer ${req.user.token}`
            }
        });
    
        return response.items.map(item => <>
    
            <div className="slides">
            <img className="logoSlideDiscover" loading="lazy" src="https://api.hotstream.me/storage/movies/1204/small-logo.png?v=c6e149f2224dafe2cf416f62a082a3a64e4a6ed5" alt="poster" width="632" height="100" />
            <p>{isNaN(percent) ? "N'a pas encore reçu d'avis." : `Recommandé à ${percent}%.`}</p>
            <p>{truncateString(item.overview, 300)}</p>
    
            <div>
                <button type="button" value={item.userLike} itemID={item.id}>
                    <svg width="21" height="21" fill="#ffffff" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                    </svg>
                    <svg width="21" height="21" fill="#ffffff" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                    </svg>
                    <span>1</span>
                </button>
                <a href={item.movie == 1 ? `/movie?id=${item.id}` : `/serie?id=${item.id}`}>Voir la fiche</a>
            </div>
    
            <div><img loading="lazy" src={item.wallPoster} alt="banner" width="100" height="100" /></div>
            </div>
        </>).join("\n");
    }

    async function getLinePercent(req, ids, progression) {
        const response = await expressapi.RequestHelper.request({
            url: `${process.env.API_BASE_URL}/items?ids=${ids.join(",")}`,
            headers: {
                "Authorization": `Bearer ${req.user.token}`
            }
        });
    
        return response.items.map(item => <>
        
            <div>
                <a href={item.movie == 1 ? `/movie?id=${item.id}` : `/serie?id=${item.id}`}><img loading="lazy" src={item.smallPoster} alt="poster" width="100" height="100" /></a>
                <p>{item.title}</p>
                <span className="categTag">{item.movie == 1 ? "Film" : "Série"}</span>
                <div className="barre"><span style={`width: ${progression}%`}></span></div>
                <p>{item.movie == 1 ? "Film" : "Série"} ● {item.releaseDate}</p>
            </div>
        </>).join("\n");
    }

    const response = await expressapi.RequestHelper.request({
        url: `${process.env.API_BASE_URL}/items/${id}`,
        headers: {
            "Authorization": `Bearer ${req.user.token}`
        }
    });

    const responseProgressions = await expressapi.RequestHelper.request({
        url: `${process.env.API_BASE_URL}/progressions`,
        headers: {
            "Authorization": `Bearer ${req.user.token}`
        }
    });

    const responseCompanies = await expressapi.RequestHelper.request({
        url: `${process.env.API_BASE_URL}/companies`,
        headers: {
            "Authorization": `Bearer ${req.user.token}`
        }
    });

    const percent = Math.round(response.item.likes.filter(l => l == 1).length / response.item.likes.length * 100);

    const progressionFilm = async (req) => {
        let arrayFilm = [];
        let arrayFilmPercent = [];

        responseProgressions.progressions.map((progression) => {
            if (progression.length > 0) {
                progression.forEach(element => {
                    arrayFilm.push(element.refId)
                    arrayFilmPercent.push(element.progression)
                });
            } else {
                arrayFilm.push(progression.refId)
                arrayFilmPercent.push(progression.progression)
            }
        });
        
        return await getLinePercent(req, arrayFilm, arrayFilmPercent)
    }
    // const id = 3;

    return(        
        <div id="app">
            <div className="nomarge slide">
                {await getSlide(req, [986, 997, 1026, 743], percent)}
            </div>
            <div className="pagination">
                <div className="page active" data-num="1"></div>
                <div className="page" data-num="2"></div>
                <div className="page" data-num="3"></div>
                <div className="page" data-num="4"></div>
            </div>

            <div className="inline" id="companies">
                <p>Franchises & Studios phares</p>

                <div>
                    {
                        responseCompanies.companies.filter(company =>
                            company.color != null
                        ).map(company => <>
                            <a href={`/catalog?company=${company.id}`} style={`background-color: ${company.color};`}><img loading="lazy" src={`${process.env.API_BASE_URL}/assets/companies/${company.id}`} alt="logo" width="100" height="100" /></a>
                        </>).join("\n")
                    }
                </div>
            </div>


            <div className="inline">
                <p>Reprendre la lecture</p>
                <div>
                    {await progressionFilm(req)}
                </div>
            </div>

            <div className="inline large image topAll">
                <div className="topTitle">
                    <p>Top 10 de la semaine</p>
                    <a href="/catalog?filter=popular">
                        Voir plus
                        <svg width="18" height="18" fill="#e64d69" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </a>
                </div>

                <div className="topAffiche">{await getTop(req)}</div>
            </div>
            <div className="inline large nomarge">
                <div>
                    <p>Derniers ajouts</p>
                    <a href="/catalog?filter=recent">
                        Voir plus
                        <svg width="18" height="18" fill="#e64d69" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </a>
                </div>

                <div>{await getLast(req)}</div>
            </div>

            <div className="inline">
                <p>Héros intrépides</p>

                <div>{await getLine(req, [3, 91, 86, 268, 37, 1, 136, 4, 252, 14, 6, 41, 40, 28, 179, 55, 50, 202])}</div>
            </div>
            <div className="inline">
                <p>Animation envoûtante</p>

                <div>{await getLine(req, [241, 261, 184, 72, 252, 208, 259, 222, 257, 116])}</div>
            </div>
            <div className="inline">
                <p>Combats et adrénaline</p>

                <div>{await getLine(req, [150, 104, 110, 65, 298, 186, 18, 256, 302, 163, 77, 184, 137, 199, 81, 160, 78])}</div>
            </div>
            <div className="inline">
                <p>Univers magiques</p>

                <div>{await getLine(req, [151, 76, 239, 120, 301, 231, 299, 168, 75, 167, 205])}</div>
            </div>
            <div className="inline">
                <p>Mystères et enquêtes</p>

                <div>{await getLine(req, [320, 108, 118, 221, 109, 169, 245, 61, 18, 230, 232, 15, 117, 202, 231])}</div>
            </div>
            <div className="inline">
                <p>Thrillers captivants</p>

                <div>{await getLine(req, [317, 118, 183, 200, 106, 306, 79, 100, 172, 78, 176, 108, 77, 109, 1, 221])}</div>
            </div>
            <div className="inline">
                <p>Destins courageux</p>

                <div>{await getLine(req, [414, 138, 132, 114, 128, 112, 63, 67, 302, 88, 175, 33, 86, 62, 236])}</div>
            </div>
            <div className="inline">
                <p>Univers futuristes et mystérieux</p>

                <div>{await getLine(req, [214, 227, 182, 280, 122, 178, 217, 46, 174, 75, 60, 128, 224])}</div>
            </div>
        </div>
    )
}