package com.bangkit.c22ps219.medicall.data.model

import android.util.Log
import java.io.BufferedReader
import java.io.IOException
import java.io.InputStream
import java.io.InputStreamReader
import java.net.HttpURLConnection
import java.net.MalformedURLException
import java.net.URL
import javax.net.ssl.HttpsURLConnection

class DownloadURL {
    @Throws(IOException::class)
    fun readUrl(myUrl: String): String {

        var data = ""
        var inputStream: InputStream? = null
        var urlConnection: HttpsURLConnection? = null

        try {
            val url = URL(myUrl)
            urlConnection = url.openConnection() as HttpsURLConnection
            urlConnection.connect()

            inputStream = urlConnection.inputStream
            val br = BufferedReader(InputStreamReader(inputStream!!))
            val sb = StringBuffer()

            var line = ""
            while ((line == br.readLine()) != null) sb.append(line)

            data = sb.toString()
            br.close()
        } catch (e: MalformedURLException) {
            e.printStackTrace()
        } catch (e: IOException) {
            e.printStackTrace()
        } finally {
            inputStream!!.close()
            urlConnection!!.disconnect()
        }

        Log.d("DownloadURL", "Returning data= $data")
        return data
    }
}