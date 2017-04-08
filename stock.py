from flask import Flask , render_template,json,jsonify , request,redirect , url_for
from yahoo_finance import Share
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('quote.html')


@app.route('/fetch',methods=['GET','POST'])
def fetch():
    print ('fetch caled')

    symbo=request.args.get('symbol').upper()
    print (symbo)
    for c in symbo:
        if c<'A' or c>'Z':

            data = {'error': 'please enter a valid symbol'}
            return jsonify(data)
    yahoo = Share(symbo)
    yahoo.refresh()
    print(type(yahoo))
    print(" a share of {} costs {}".format(yahoo.data_set['Name'],yahoo.get_price()))
    print(yahoo.__dict__)

    if yahoo.data_set['Volume'] is not  None:
        print(yahoo.get_name())
        data={'price':yahoo.get_price(),'name':yahoo.get_name()}

    else:
        print('please enter a valid symbol')
        data={'error':'please enter a valid symbol'}
    print(data)
    return jsonify(data)

app.run()