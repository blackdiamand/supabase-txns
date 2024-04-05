#  https://pxidrgkatumlvfqaxcll.supabase.co/rest/v1/txns?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4aWRyZ2thdHVtbHZmcWF4Y2xsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg5OTUzOTgsImV4cCI6MTk4NDU3MTM5OH0.d_yYtASLzAoIIGdXUBIgRAGLBnNow7JG2SoaNMQ8ySg
#  Todo: better trade dump  (range or time query) + merge

#  User Alice https://pxidrgkatumlvfqaxcll.supabase.co/rest/v1/txns?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4aWRyZ2thdHVtbHZmcWF4Y2xsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg5OTUzOTgsImV4cCI6MTk4NDU3MTM5OH0.d_yYtASLzAoIIGdXUBIgRAGLBnNow7JG2SoaNMQ8ySg&from_id=eq.qJHrvvGfGsYiHZkGY6XjVfIMj233&order=created_time.desc

import json

with open('allthemana.json') as f:
    d = json.load(f)
    for txn in d:
        if txn['from_id'] == "qJHrvvGfGsYiHZkGY6XjVfIMj233":
            print(txn['amount'])
