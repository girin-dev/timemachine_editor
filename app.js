(function (render) {
    let lang = 'ko';
    const Msg = {
        err: {
            ko: {
                previous: '이전 버전이 없습니다.',
                next: '다음 버전이 없습니다.',
                save: '빈 값은 저장할 수 없습니다.'
            },
            en: {
                previous: 'No previous version.',
                next: 'No next version.',
                save: 'Can\'t save blank.'
            }
        }
    };
    let Data = {
        currPosition: 0,
        contentList: []
    };
    const Func = {
        save: function (content) {
            Data.contentList.push(content);
            Data.currPosition = Data.contentList.length;
            render(Data.currPosition, Data.contentList);
        },
        previous: function () {
            Data.currPosition -= 1;
            render(Data.currPosition, Data.contentList);
        },
        next: function () {
            Data.currPosition += 1;
            render(Data.currPosition, Data.contentList);
        }
    };
    const err = function (errCondition) {
        var errMsg = Msg.err[lang][errCondition];
        return alert(errMsg);
    };
    render();
    document.querySelector('.save').addEventListener('click', function () {
        document.querySelector('.content').value === '' ? err('save') : Func.save(document.querySelector('.content').value);
    });
    document.querySelector('.previous').addEventListener('click', function () {
        Data.currPosition <= 1 ? err('previous') : Func.previous();
    });
    document.querySelector('.next').addEventListener('click', function () {
        Data.currPosition === Data.contentList.length ? err('next') : Func.next();
    });
})(function (posit, conList) {
    let contentList = conList ? conList : [];
    // if (posit) {
    //     // let이요..? 그냥 var 대신 쓰면 되는거 아니에요..? 
    //     let position = posit;
    //     let content = contentList[posit - 1];
    //     console.log('posit');
    // } else {
    //     let position = 0;
    //     let content = '';
    // }
    let position = posit ? posit : 0;
    let content = posit ? contentList[posit - 1] : ''
    // let으로 지정한 변수가 빠져나오지 못하네요 ㅎㅎㅎㅎ
    document.querySelector('.content').value = contentList;
    document.querySelector('.curr-version').innerHTML = position;
    document.querySelector('.whole-version').innerHTML = contentList.length;
});