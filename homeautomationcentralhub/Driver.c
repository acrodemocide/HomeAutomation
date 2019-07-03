#include <stdio.h>
#include <stdlib.h>
#include <curl/curl.h>

int main(int argc, char* argv[])
{
    CURL *curl;
    CURLcode res;
    
    curl = curl_easy_init();
    if(curl)
    {
        curl_easy_setopt(curl, CURLOPT_URL, "https://10.0.0.23:5001/api/todo");
        // The following settings allow us to use a certificate that is not verified -- this allows us to accept the development
        //  certificate we're using for the web API. This should be fixed later (though I don't want to pay money for a certificate
        //  unless this is making money -- which it's not because it's mostly going to be for fun.)
        curl_easy_setopt(curl, CURLOPT_SSL_VERIFYPEER, 0);
        curl_easy_setopt(curl, CURLOPT_SSL_VERIFYHOST, 0);
        
        /* Perform the request, res will get the return code */
        res = curl_easy_perform(curl);
        /* Check for errors */
        if(res != CURLE_OK)
            fprintf(stderr, "curl_easy_perform() failed: %s\n", curl_easy_strerror(res));
            
        /* always cleanup */
        curl_easy_cleanup(curl);
    }

    printf("\n");
    
    // char request[1000]={0};
    // char resourcePath[] = "2016/04/create-xml-request-in-c-for-server.html";
    // char hostAddress[] = "www.aticleworld.com";
    // sprintf(request, "GET /%s HTTP/1.1\r\nHost: %s\r\nContent-Type: text/plain\r\n\r\n", resourcePath, hostAddress);
    // printf("Created Get Request is below:\n\n\n");
    // printf("%s", request);
    return 0;
}
