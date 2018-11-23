class ApplicationController < ActionController::API


    def secret_key
        'react1sAw3s0me'
    end

    def encode(payload)
        JWT.encode(payload,secret_key,'HS256')
    end

    def decode(token)
        # 0 for just payload
        JWT.decode(token,secret_key,true,{algorithm:'HS256'})[0]
    end
end
